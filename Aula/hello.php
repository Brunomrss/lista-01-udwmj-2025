<?php
$nome = $argv[1] ?? '';
$idade = intval($argv[2] ?? 0);

if ($nome === '' || $idade <= 0) {
    echo "Informe nome e idade válidos!\n";
} else {
    if ($idade >= 18) {
        echo "$nome é maior de idade!\n";
    } else {
        echo "$nome é menor de idade!\n";
    }
}
