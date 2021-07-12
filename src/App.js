import './App.css';
import React, {useState} from 'react'
import {Fab, TextField, Grid} from '@material-ui/core'
import {GetApp} from '@material-ui/icons'
import QRcode from 'qrcode.react';

function App() {
  const [qr, setQr] = useState('https://enrutate.vercel.app/');
  const handleChange = (event) => {
      setQr(event.target.value);
  };
  const descargarQR = () => {
      const canvas = document.getElementById("qrEnrutate");
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream"); 
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "qrEnrutate.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
  };

  return (
    <div className="body html">
        <div className="generador">
            <h3>Generador de QR Enrútate</h3>
            <div style={{marginTop:30}}>
                <TextField onChange={handleChange} style={{width:320}}
                value={qr} label="Liga de la parada" size="small" variant="outlined"  
                />
            </div>
            <div>
                {
                    qr ?
                    <QRcode 
                        id="qrEnrutate"
                        value={qr} 
                        size={420}
                        includeMargin={true}
                    /> :
                    <p>No existen datos para generar QR</p>
                }
            </div>
            <div id="descarga">
                {
                    qr ? 
                    <Grid container>
                    
                        <Grid item xs={2}>
                        <Fab onClick={descargarQR} style={{marginLeft:10}} color="primary">
                            <GetApp/>
                        </Fab>
                        </Grid>
                    </Grid> :
                    ''
                }
            </div>
        </div>
            <div className="ciudad"></div>
                <div className="camionAnimated2">
                    <div className="marco"></div>
                </div>
    </div>
  );
}

export default App;
