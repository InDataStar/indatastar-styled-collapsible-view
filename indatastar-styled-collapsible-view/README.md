# 📦 indatastar-styled-collapsible-view
A simple, lightweight **collapsible panel** component for React Native.  
Great for FAQs, menus, and any section that needs collapsible content.

---
## ✨ Features
Animate expand/collapse smoothly

Fully customizable with styles

Works with Text, View, Button, Image, or nested components

Works in Expo and React Native CLI

No native dependencies required
---

## 📦 Installation
 
```bash
npm install indatastar-styled-collapsible-view
``` 
```yarn
yarn add indatastar-styled-collapsible-view
```


---

## ✨ Features
```
import React from "react";
import { Text, View, Button, Image } from "react-native";
import { CollapsibleView } from "indatastar-styled-collapsible-view";

export default function App() {
  return (
    <View style={{ padding: 20 }}>
      <CollapsibleView title="What is your return policy?">
        <Text>You can return any item within 30 days of purchase.</Text>
      </CollapsibleView>

      <CollapsibleView title="Features List">
        <View>
          <Text>• Easy to use</Text>
          <Text>• Fast and responsive</Text>
          <Text>• Works on iOS and Android</Text>
        </View>
      </CollapsibleView>

      <CollapsibleView title="Actions">
        <Button title="Save" onPress={() => alert("Saved!")} />
        <Button title="Cancel" onPress={() => alert("Cancelled!")} />
      </CollapsibleView>

      <CollapsibleView title="Product Info">
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={{ width: 150, height: 150, marginBottom: 10 }}
        />
        <Text>High-quality product with 1-year warranty.</Text>
      </CollapsibleView>

      <CollapsibleView title="FAQ">
        <CollapsibleView title="What is the warranty?">
          <Text>All items come with a 1-year warranty.</Text>
        </CollapsibleView>
        <CollapsibleView title="Do you ship internationally?">
          <Text>Yes, we ship worldwide.</Text>
        </CollapsibleView>
      </CollapsibleView>
    </View>
  );
}
```
---


## Notes
The collapse animation uses Animated from React Native with useNativeDriver: false.

You can nest CollapsibleView components to create multi-level accordions.

Always wrap your children in a View if you want multiple components inside a single collapsible.

---

## 📄 License
MIT

---