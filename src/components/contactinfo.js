import * as React from 'react';
import { theme } from '../variables';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const ContactInfo = ({ icon, name, children }) => {
  const Icon = icon;

  return (
      <Paper
        elevation={3}
        sx={{
          m: 3,
          borderRadius: 0,
          borderTopLeftRadius: '10px',
          borderBottomRightRadius: '10px',
          overflow: 'hidden',
        }}
      >
      <table
        style={{
          display: 'inline-table',
          borderCollapse: 'collapse',
          width: '100%',
          textAlign: 'center',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                position: 'relative',
                color: theme.text.light,
                backgroundColor: theme.primary,
                padding: 6,
                textTransform: 'uppercase',
                fontSize: '0.8em',
                letterSpacing: '0.1em',
              }}
            >
              <Icon
                sx={{
                  position: 'absolute',
                  left: 7,
                  fontSize: '1.5em',
                }}
              />
              { name }
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                fontWeight: 'bold',
                color: theme.text.dark,
                padding: 15,
              }}
            >
              { children }
            </td>
          </tr>
        </tbody>
      </table>
      </Paper>
  );
}
export default ContactInfo;