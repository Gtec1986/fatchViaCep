//by gtec_1986:
let data;
let e;
let form = []
let = i = 0
let n_data = []
let complements = ['cep', 'logradouro', 'complemento', 'bairro', 'localidade', 'uf',]
for (let i = 0; i < complements.length; i++) {
     form[i] = document.querySelector('#' + complements[i])
}

const CEP = document.querySelector('#cep')
const cep = document.querySelector('#cep').onkeyup = e => {
     function search() {
          fetch(`https://viacep.com.br/ws/${CEP.value}/json`)
               .then(response => response.json())
               .then(data => { console.log(data); for (let d in data) { n_data[i] = data[d]; form[i].value = n_data[i]; i = i + 1 } })
               .catch(err => console.log('deu erro'))
     }

     if (CEP.value !== '' && CEP.value.length === 8 && e.isTrusted === true && e.key === 'Enter') {
          for (i = 0; i > complements.length; i++) { form[i].value = '' }
          search()
     }

}

