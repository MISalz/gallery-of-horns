
import React from 'react';
import HornedBeast from './HornedBeast';

class App extends React.Component {
  render() {
    return (
      <main>
        <HornedBeast name="HB1"
        title =''
        imageUrl=''
         description ='' />
        <HornedBeast name="HB2" />
        <HornedBeast name="HB3"/>
        <HornedBeast name="HB4"/>
      </main>
    );
  }
}
export default App;