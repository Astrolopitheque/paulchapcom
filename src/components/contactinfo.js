import * as React from 'react';
import { theme } from '../variables';

const ContactInfo = ({ icon, name, children }) => {
  const Icon = icon;

  return (
    <table
      style={{
        display: 'inline-table',
        margin: 10,
        borderCollapse: 'collapse',
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
              borderTopLeftRadius: '10px',
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
              backgroundColor: theme.light.secondary,
              borderBottomRightRadius: '10px',
              padding: 15,
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