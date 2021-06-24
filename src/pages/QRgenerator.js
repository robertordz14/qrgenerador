import React, {useState} from 'react'
import {Fab, TextField, Grid} from '@material-ui/core'
import {ArrowBack, GetApp} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QRcode from 'qrcode.react';
import './style.css';

function QRgenerator() {
    const [qr, setQr] = useState('https://enrutate.vercel.app/maps/');
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
      <div>
            <Link to="/">
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </Fab>
            </Link>
            <span>QR Generator</span>
            
            <div style={{marginTop:30}}>
                <TextField onChange={handleChange} style={{width:320}}
                value={qr} label="QR content" size="small" variant="outlined" color="primary" 
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
            <div>
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
    );
  }
  
  export default QRgenerator;
  