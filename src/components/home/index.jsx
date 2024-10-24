import {useState} from 'react'
import {Button, Image, Spin} from 'antd'
import Navbar from '../navbar'
export default function Home() {
    
  const [image, setImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const getUrl = async () => {
    try {
      setIsLoading(true)
      const urlFromApi = await fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => json.message)
      setImage(urlFromApi)
    }
    catch (e) {
      console.log(e)
    }
    finally {
      setIsLoading(false)
    }
  }


  return (
    <div className="App">
      
    
      <h1>Bem vindo ao gerador de imagem mais fofo do mundo!</h1>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '1rem' }}>
        <Button type='primary' onClick={() => { getUrl() }} >Gerar imagem</Button>
        <div style={{ maxWidth: '30%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {!isLoading ? <Image src={image} /> : <Spin style={{ width: '100%' }} />}
        </div>
      </div>

    </div>
  )
}