---
title: 'RecoilJS en Práctica: Gestión de Estado Moderna en React'
description: 'Aprende a implementar una gestión de estado eficiente en React usando RecoilJS, la biblioteca desarrollada por Facebook. Guía práctica con ejemplos de código y casos de uso reales.'
publishDate: 2024-03-20
author: 'Gabriel Vinhaes de Lima'
category: 'Frontend'
tags: ['React', 'RecoilJS', 'JavaScript', 'Estado', 'Performance']
image: '/blog/recoiljs-banner.jpg'
---

# RecoilJS en Práctica: Gestión de Estado Moderna en React

RecoilJS es una biblioteca innovadora de gestión de estado para React, desarrollada por el equipo de Facebook. En un ecosistema lleno de opciones, RecoilJS destaca por su integración nativa con las últimas características de React, como Suspense y Concurrent Mode. En este artículo, exploraremos en la práctica cómo implementar una gestión de estado eficiente usando RecoilJS.

## ¿Por qué RecoilJS?

Tres características fundamentales hacen de RecoilJS una elección excepcional:

1. **Sintaxis Familiar**: API intuitiva que sigue los patrones y principios de React
2. **Gestión Avanzada**: Control eficiente de datos derivados y asíncronos a través de funciones puras
3. **Depuración Inteligente**: Capacidad de observar múltiples aplicaciones sin comprometer el code-splitting

## Demostración Práctica

Para demostrar el poder de RecoilJS, desarrollé una aplicación de gestión que integra usuarios, redes, tiendas y productos. La aplicación ejemplifica escenarios comunes en sistemas empresariales, como:

- Relaciones complejas entre entidades
- Carga asíncrona de datos
- Estados compartidos
- Actualizaciones en tiempo real

![Demostración de la Aplicación](@assets/blog/recoiljs-demo.gif)

## Conceptos Fundamentales

Antes de sumergirnos en el código, entendamos los conceptos esenciales de RecoilJS:

### Atoms

Los Atoms son las unidades básicas de estado en RecoilJS. Similar al useState de React, pueden almacenar cualquier tipo de dato válido en JavaScript. Para acceder a un Atom, utilizamos el hook useRecoilState:

```typescript
const usersAtom = atom<Array<User>>({
  key: 'usersAtom',
  default: usersQuery(),
});
```

### Selectors

Los Selectors son transformadores de estado que pueden derivar datos de Atoms u otros Selectors. Funcionan como un sistema de caché inteligente:

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

RecoilRoot es el componente que encapsula todo el árbol de componentes que utilizarán RecoilJS:

```typescript
function App() {
  return (
    <RecoilRoot>
      <YourApp />
    </RecoilRoot>
  );
}
```

## Implementación Detallada

### Gestión de Usuarios

Comenzamos implementando la gestión de usuarios con un Atom simple:

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

### Componente de Listado

Creamos un componente reutilizable para mostrar las entidades:

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

### Gestión de Estado Compartido

Una de las características más poderosas de RecoilJS es atomFamily, que permite crear estados dinámicos basados en parámetros:

```typescript
export const chainsAtom = atomFamily<Array<Chain>, number>({
  key: 'chainsAtom',
  default: (userId: number) => chainsQuery(userId),
});
```

### Actualizaciones en Tiempo Real

Implementamos un hook personalizado para facilitar la edición de estados:

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

## Conclusión

RecoilJS representa un avance significativo en la gestión de estado para aplicaciones React. Su API intuitiva, integración nativa con características modernas de React y capacidad para manejar estados complejos lo convierten en una excelente elección para proyectos de cualquier escala.

La combinación de Atoms, Selectors y atomFamily ofrece una solución elegante para los desafíos más comunes en el desarrollo de aplicaciones React, manteniendo el código limpio y mantenible.

### Próximos Pasos

¡Pronto publicaré un artículo más profundo sobre patrones avanzados de edición de estado con RecoilJS. ¡Mantente atento!

### Recursos Adicionales

- [Código Fuente Completo](https://github.com/Gabrielgvl/recoil-demo-app)
- [Documentación Oficial de RecoilJS](https://recoiljs.org/)
- [Guía de Buenas Prácticas](https://recoiljs.org/docs/introduction/getting-started) 
