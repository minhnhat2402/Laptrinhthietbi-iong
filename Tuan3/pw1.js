import React, { useState } from 'react';

export default function PasswordGenerator() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8); // Độ dài mặc định là 8 ký tự
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(false);

  const generatePassword = () => {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let charSet = '';
    if (includeLower) charSet += lowerCase;
    if (includeUpper) charSet += upperCase;
    if (includeNumber) charSet += numbers;
    if (includeSymbol) charSet += symbols;

    if (charSet === '') {
      alert('Please select at least one character type!');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: '#2E3A59', color: 'white', width: '300px', borderRadius: '10px' }}>
      <h2>Password Generator</h2>

      <input 
        type="text" 
        value={password} 
        readOnly 
        style={{ width: '100%', padding: '10px', marginBottom: '10px', textAlign: 'center', backgroundColor: '#fff', color: '#000' }} 
      />

      <div style={{ marginBottom: '10px' }}>
        <label>Password length</label>
        <input 
          type="number" 
          min="1" 
          value={length} 
          onChange={(e) => setLength(e.target.value)} 
          style={{ marginLeft: '10px', width: '50px' }} 
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} />
        <label style={{ marginLeft: '10px' }}>Include lower case letters</label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} />
        <label style={{ marginLeft: '10px' }}>Include uppercase letters</label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <input type="checkbox" checked={includeNumber} onChange={() => setIncludeNumber(!includeNumber)} />
        <label style={{ marginLeft: '10px' }}>Include number</label>
      </div>

      <div style={{ marginBottom: '10px' }}>
        <input type="checkbox" checked={includeSymbol} onChange={() => setIncludeSymbol(!includeSymbol)} />
        <label style={{ marginLeft: '10px' }}>Include special symbol</label>
      </div>

      <button 
        onClick={generatePassword} 
        style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Generate Password
      </button>
    </div>
  );
}
