const curpRegex = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
const issnRegex = /[0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][X0-9]/;

function checkInputs() {
    try{
        var curp = document.getElementById("curp").value;
        var issn = document.getElementById("issn").value;
        if ((curp === '' || curp.length == 0 ||!curpRegex.test(curp))){

            alert('LA CURP NO ES CORRECTA');
            return false;
        }else if ((issn === '' || issn.length == 0 ||issnRegex.test(issn) == false)){
            alert('Código ISSN incorrecto verifique nuevamente');
            return false;
        }
        localStorage["curp"]= curp;
        localStorage["issn"]= issn;
        return true;
    }catch(error){
        console.error(error);
    }
    
}