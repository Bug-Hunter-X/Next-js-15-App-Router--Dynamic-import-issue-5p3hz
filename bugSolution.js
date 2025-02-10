```javascript
// pages/index.js
import { Suspense, lazy } from 'react';

const DynamicComponent = lazy(() => import('./dynamic'));

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent />
    </Suspense>
  );
}

// pages/dynamic.js

export default function DynamicComponent() {
  return (
    <div>Dynamic Component Loaded!</div>
  );
}
```