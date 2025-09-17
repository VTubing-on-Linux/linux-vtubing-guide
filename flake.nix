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
