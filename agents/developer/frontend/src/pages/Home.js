// src/pages/Home.js
import React, { useState } from 'react';
import { submitPrompt } from '../services/orchestrator';
import AgentLog from '../components/AgentLog';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Paper,
} from '@mui/material';

function Home() {
  const [prompt, setPrompt] = useState('');
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await submitPrompt(prompt);
    setTasks(response);
    setLoading(false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {/* A Paper container for a subtle card-like background */}
      <Paper elevation={3} sx={{ p: 4, bgcolor: 'rgba(255, 255, 255, 0.8)' }}>
        <Typography variant="h4" gutterBottom>
          Enter Your Project Idea
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="Project Idea"
            variant="outlined"
            multiline
            rows={4}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            fullWidth
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>

        {loading && (
          <Box sx={{ mt: 2 }}>
            <CircularProgress />
            <Typography>Processing your idea...</Typography>
          </Box>
        )}

        <AgentLog tasks={tasks} />
      </Paper>
    </Container>
  );
}

export default Home;
