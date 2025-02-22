// src/components/AgentLog.js
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

function AgentLog({ tasks }) {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Typography variant="h5" gutterBottom>
        Agent Tasks
      </Typography>
      {tasks ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={2} sx={{ p: 2 }}>
            <pre>{JSON.stringify(tasks, null, 2)}</pre>
          </Paper>
        </motion.div>
      ) : (
        <Typography>No tasks to display yet.</Typography>
      )}
    </div>
  );
}

export default AgentLog;
