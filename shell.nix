{ pkgs ? import <nixpkgs> {} }:

let
  unstable = import (fetchTarball https://nixos.org/channels/nixos-unstable/nixexprs.tar.xz) { };
in
pkgs.mkShell {
  nativeBuildInputs = with pkgs.buildPackages; [
    unstable.bun
  ];
}
