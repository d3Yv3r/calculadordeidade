function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('txtano')
  let res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO!] Verifique os dados e tente novamente!')
  } else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let genero = ''
    let img = document.createElement('img')

    if (fsex[0].checked) {
      genero = "Homem"
      
      if (idade >=0 && idade < 4) {
        //bebê
        img.setAttribute('src', 'img/bebemenino.png')
      } 
      
      else if (idade >=5 && idade < 9) {
        //criança
        img.setAttribute('src', 'img/menino.png')
      } 
      
      else if (idade >= 10 && idade < 15) {
        //adolescente
        img.setAttribute('src', 'img/adolescentemenino.png')
      }

      else if (idade >= 16 && idade < 25) {
        //jovem adulto
        img.setAttribute('src', 'img/jovemadulto.png')
      }

      else if (idade >= 26 && idade < 49) {
        //adulto
        img.setAttribute('src', 'img/adulto.png')
      }

      else if (idade >= 50) {
        //idoso
        img.setAttribute('src', 'img/idoso.png')
      }
    } else if (fsex[1].checked) {
      genero = "Mulher"

      if (idade >=0 && idade < 4) {
        //bebê
        img.setAttribute('src', 'img/bebemenina.png')
      } 
      
      else if (idade >=5 && idade < 9) {
        //criança
        img.setAttribute('src', 'img/menina.png')
      } 
      
      else if (idade >= 10 && idade < 15) {
        //adolescente
        img.setAttribute('src', 'img/adolescentemenina.png')
      }

      else if (idade >= 16 && idade < 25) {
        //jovem adulto
        img.setAttribute('src', 'img/jovemadulta.png')
      }

      else if (idade >= 26 && idade < 49) {
        //adulto
        img.setAttribute('src', 'img/adulta.png')
      }

      else if (idade >= 50) {
        //idoso
        img.setAttribute('src', 'img/idosa.png')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }

}
