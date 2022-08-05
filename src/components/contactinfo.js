import * as React from 'react';
import { theme } from '../variables';

const ContactInfo = ({ icon, name, children }) => {
  const Icon = icon;

  return (
    <table
      style={{
        display: 'inline-table',
        margin: 10,
        border: '1px solid #333',
        borderCollapse: 'separate',
        borderSpacing: 4,
        minWidth: '200px',
        textAlign: 'center',
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              position: 'relative',
              color: theme.text.light,
              backgroundColor: theme.secondary,
              padding: 5,
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
              backgroundColor: theme.light.secondary,
              padding: 12,
            }}
          >
            { children }
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default ContactInfo;