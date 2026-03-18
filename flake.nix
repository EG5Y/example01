{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs =
    {
      self,
      nixpkgs,
    }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
      ];
      forEachSystem = nixpkgs.lib.genAttrs systems;
    in
    {
      devShells = forEachSystem (
        system:
        let
          pkgs = import nixpkgs { inherit system; };
        in
        {
          default =
            with pkgs;
            mkShell {
              packages = [
                nodejs_25
                pnpm
                taplo
                vtsls
                emmet-language-server
                tailwindcss_4
                tailwindcss-language-server
                ripgrep
                prettier
                eslint
              ];
            };
        }
      );
    };
}
