{
  description = "Community maintained guide to VTubing on Linux";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    {
      self,
      nixpkgs,
      systems,
      ...
    }:
    let
      inherit (nixpkgs) lib;
      forAllSystems = lib.genAttrs (import systems);
      pkgsFor = forAllSystems (system: nixpkgs.legacyPackages.${system});
    in
    {
      packages = forAllSystems (system: {
        default = pkgsFor.${system}.callPackage ./nix/pkgs/linux-vtubing-guide { };
      });

      legacyPackages = forAllSystems (
        system:
        let
          base = "linux-vtubing-guide";
        in
        with pkgsFor.${system};
        {
          webserver = symlinkJoin {
            name = "${base}-webserver";
            meta.mainProgram = "http-server";
            nativeBuildInputs = [ makeWrapper ];
            paths = [
              http-server
              (linkFarm "" [
                {
                  name = "public/${base}";
                  path = self.packages.${system}.default;
                }
              ])
            ];
            postBuild = ''
              wrapProgram $out/bin/http-server \
                --add-flags "$out/public"
            '';
          };
        }
      );

      devShells = forAllSystems (
        system: with pkgsFor.${system}; {
          default = mkShell {
            packages = [
              nodejs
            ];
          };
        }
      );
    };
}
