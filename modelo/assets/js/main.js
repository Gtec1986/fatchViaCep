/*
let data;
let e;
let form=[]
let= i=0
let n_data=[]
let campos=['cep','logradouro','complemento','bairro','localidade', 'uf',]
for(let i=0;i<campos.length;i++){
     form[i]=document.querySelector('#'+campos[i])

}

const CEP = document.querySelector('#cep')
const cep = document.querySelector('#cep').onkeyup = e => {

     if (e.isTrusted === true && e.key === 'Enter') {
          alert('deu certo')
          alert(CEP.value)
        
               fetch(`https://viacep.com.br/ws/${CEP.value}/json`)
                    .then(response => response.json())
                    .then(data=>{ for(let d in data ){n_data[i]=data[d];form[i].value=n_data[i];i=i+1;} })
                    .catch(err => console.log('deu erro'))
          
     }



}
*/
