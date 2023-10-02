# Modal Component

A simple React modal component for displaying content in a modal dialog.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Example](#example)
- [License](#license)

## Installation

You can install the `modal-vy2` package from npm using the following command:

```bash
npm install modal-vy2
# or
yarn add modal-vy2
```



##  Usage
To use the Modal component in your React application, follow these steps:

Import the Modal component:

```jsx
import Modal from 'modal-vy2';
```

Use the Modal component in your JSX code. Pass the necessary props to control its behavior.

```jsx
<Modal isOpen={isModalOpen} onClose={toggleModal} content="Employee Created!" />
```


Customize the isOpen, onClose, and content props according to your needs.

## Props
The Modal component accepts the following props:

isOpen (boolean, required): Indicates whether the modal is open or closed.
onClose (function, required): A callback function to close the modal when triggered.
content (string or JSX element, required): The content to display inside the modal.

## Example
Here's an example of how to use the Modal component in a React component:


```jsx 
import React, { useState } from 'react';
import Modal from 'modal-vy2';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={toggleModal} content="Hello, World!" />
    </div>
  );
}

export default App;

```


## License
This project is licensed under the MIT License -

