var resultado = "";
    for (i = 1; i <= 7; i++) {
        for (j = 1; j <= 39; j++) {
            if (i == 1 || i == 7)
                resultado += "-";
            else if (j == 1 || j == 39)
                resultado += "|";
            else 
                resultado += " ";
        }
        resultado += "\n";
    }
    console.log(resultado);
