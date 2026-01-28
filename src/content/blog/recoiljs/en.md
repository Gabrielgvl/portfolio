---
title: 'RecoilJS in Practice: Modern State Management in React'
description: 'Learn how to implement efficient state management in React using RecoilJS, the library developed by Facebook. Practical guide with code examples and real use cases.'
publishDate: 2024-03-20
author: 'Gabriel Vinhaes de Lima'
category: 'Frontend'
tags: ['React', 'RecoilJS', 'JavaScript', 'State', 'Performance']
image: '/blog/recoiljs-banner.jpg'
---

# RecoilJS in Practice: Modern State Management in React

RecoilJS is an innovative state management library for React, developed by the Facebook team. In an ecosystem full of options, RecoilJS stands out for its native integration with React's latest features, such as Suspense and Concurrent Mode. In this article, we'll explore in practice how to implement efficient state management using RecoilJS.

## Why RecoilJS?

Three fundamental characteristics make RecoilJS an exceptional choice:

1. **Familiar Syntax**: Intuitive API that follows React's patterns and principles
2. **Advanced Management**: Efficient control of derived and asynchronous data through pure functions
3. **Smart Debugging**: Ability to observe multiple applications without compromising code-splitting

## Practical Demonstration

To demonstrate the power of RecoilJS, I developed a management application that integrates users, networks, stores, and products. The application exemplifies common scenarios in enterprise systems, such as:

- Complex relationships between entities
- Asynchronous data loading
- Shared states
- Real-time updates

![Application Demo](@assets/blog/recoiljs-demo.gif)

## Fundamental Concepts

Before diving into the code, let's understand the essential concepts of RecoilJS:

### Atoms

Atoms are the basic units of state in RecoilJS. Similar to React's useState, they can store any valid JavaScript data type. To access an Atom, we use the useRecoilState hook:

```typescript
const usersAtom = atom<Array<User>>({
  key: 'usersAtom',
  default: usersQuery(),
});
```

### Selectors

Selectors are state transformers that can derive data from Atoms or other Selectors. They work as an intelligent cache system:

```typescript
const currentUserState = selector<User | null>({
  key: 'currentUserState',
  get: ({ get }) => get(currentUser),
  set: ({ set, reset }, newValue) => {
    if (newValue instanceof DefaultValue) {
      return reset(currentUser);
    }
    if (newValue) {
      set(usersAtom, (users) =>
        users.map((u) => ({
          ...u,
          selected: u.id === newValue.id,
        }))
      );
    }
    return set(currentUser, newValue);
  },
});
```

### RecoilRoot

RecoilRoot is the component that encapsulates the entire component tree that will use RecoilJS:

```typescript
function App() {
  return (
    <RecoilRoot>
      <YourApp />
    </RecoilRoot>
  );
}
```

## Detailed Implementation

### User Management

We start by implementing user management with a simple Atom:

```typescript
const usersQuery = async () => {
  const { data } = await getUsers();
  return data;
};

export const usersAtom = atom<Array<User>>({
  key: 'usersAtom',
  default: usersQuery(),
});
```

### List Component

We create a reusable component to display entities:

```typescript
interface CardColumnProps<T extends BaseEntity> {
  recoilSelector: RecoilValue<Array<T>>
  children: (item: T) => ReactNode,
  title: string,
}

function ListContainer<T extends BaseEntity>({
  recoilSelector,
  children,
  title,
}: CardColumnProps<T>) {
  const list = useRecoilValue(recoilSelector);

  return (
    <>
      <Grid xs={12} item>
        <Typography align="center" variant="h5">{title}</Typography>
      </Grid>
      <Grid xs={12} container item spacing={3}>
        {list.map((item) => (
          <Grid key={item.id} item xs={12}>
            {children(item)}
          </Grid>
        ))}
      </Grid>
    </>
  );
}
```

### Shared State Management

One of the most powerful features of RecoilJS is atomFamily, which allows creating dynamic states based on parameters:

```typescript
export const chainsAtom = atomFamily<Array<Chain>, number>({
  key: 'chainsAtom',
  default: (userId: number) => chainsQuery(userId),
});
```

### Real-time Updates

We implement a custom hook to facilitate state editing:

```typescript
function useModalHelper<T extends BaseEntity>(
  selector: RecoilState<Array<T>>
): UseModalHelperReturn<T> {
  const updateList = useSetRecoilState(selector);

  const handleEdit = useCallback(
    (values: T) => {
      updateList((items) => {
        const index = items.findIndex((p) => p.id === values.id);
        return [...items.slice(0, index), values, ...items.slice(index + 1)];
      });
    },
    [updateList]
  );

  return { handleEdit };
}
```

## Conclusion

RecoilJS represents a significant advancement in state management for React applications. Its intuitive API, native integration with modern React features, and ability to handle complex states make it an excellent choice for projects of any scale.

The combination of Atoms, Selectors, and atomFamily offers an elegant solution to the most common challenges in React application development, keeping the code clean and maintainable.

### Next Steps

Soon, I'll publish a more in-depth article about advanced state editing patterns with RecoilJS. Stay tuned!

### Additional Resources

- [Complete Source Code](https://github.com/Gabrielgvl/recoil-demo-app)
- [Official RecoilJS Documentation](https://recoiljs.org/)
- [Best Practices Guide](https://recoiljs.org/docs/introduction/getting-started) 
