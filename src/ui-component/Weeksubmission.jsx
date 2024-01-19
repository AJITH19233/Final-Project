import { Container } from '@mui/material'
import React, { useState, useRef, useMemo } from 'react'
import JoditEditor from 'jodit-react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Weekly Report Submission
        </Typography>
      </CardContent>
      
      <CardContent>
        <Typography>What all to submit?</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {bull} Google Docs link
      </Typography>
      </CardContent>
        
    </React.Fragment>
  );

const Weeksubmission = () => {

    const editor = useRef(null);
    const [content, setContent] = useState('');
    function messages(){
        alert("Succesfully Submitted");
      }


  return (
    <>
    <Container>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}
      <JoditEditor
      ref={editor}
      value={content}
      onChange={newContent => setContent(newContent)}
      />
      {content}
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '30px'}}>
      <button onClick={messages}>Submit</button>
      </Box>
      </Card>
    </Box>
    </Container>
    </>
  )
}

export default Weeksubmission;