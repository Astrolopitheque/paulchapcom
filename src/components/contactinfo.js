import * as React from 'react';

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
        minWidth: '150px',
        textAlign: 'center',
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              position: 'relative',
              color: '#fff',
              backgroundColor: '#822b3a',
              padding: 5,
              textTransform: 'uppercase',
              fontSize: '0.8em',
              letterSpacing: '0.1em',
            }}
          >
            <Icon
              sx={{
                position: 'absolute',
                left: 10,
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
              backgroundColor: '#c8b0b9',
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