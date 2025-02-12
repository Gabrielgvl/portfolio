---
title: 'RecoilJS na Prática: Gerenciamento de Estado Moderno no React'
description: 'Aprenda a implementar gerenciamento de estado eficiente em React usando RecoilJS, a biblioteca desenvolvida pelo Facebook. Guia prático com exemplos de código e casos de uso reais.'
publishDate: 2024-03-20
author: 'Gabriel Lima'
category: 'Frontend'
tags: ['React', 'RecoilJS', 'JavaScript', 'Estado', 'Performance']
image: '/blog/recoiljs-banner.jpg'
---

# RecoilJS na Prática: Gerenciamento de Estado Moderno no React

O RecoilJS é uma biblioteca inovadora de gerenciamento de estado para React, desenvolvida pela equipe do Facebook. Em um ecossistema repleto de opções, o RecoilJS se destaca por sua integração nativa com as funcionalidades mais recentes do React, como Suspense e Concurrent Mode. Neste artigo, vamos explorar na prática como implementar um gerenciamento de estado eficiente usando RecoilJS.

## Por que RecoilJS?

Três características fundamentais tornam o RecoilJS uma escolha excepcional:

1. **Sintaxe Familiar**: API intuitiva que segue os padrões e princípios do React
2. **Gerenciamento Avançado**: Controle eficiente de dados derivados e assíncronos através de funções puras
3. **Depuração Inteligente**: Capacidade de observar múltiplas aplicações sem comprometer o code-splitting

## Demonstração Prática

Para demonstrar o poder do RecoilJS, desenvolvi uma aplicação de gerenciamento que integra usuários, redes, lojas e produtos. A aplicação exemplifica cenários comuns em sistemas empresariais, como:

- Relacionamentos complexos entre entidades
- Carregamento assíncrono de dados
- Estados compartilhados
- Atualizações em tempo real

![Demonstração da Aplicação](@assets/blog/recoiljs-demo.gif)

## Conceitos Fundamentais

Antes de mergulharmos no código, vamos entender os conceitos essenciais do RecoilJS:

### Atoms

Os Atoms são as unidades básicas de estado no RecoilJS. Similar ao useState do React, podem armazenar qualquer tipo de dado válido em JavaScript. Para acessar um Atom, utilizamos o hook useRecoilState:

```typescript
const usersAtom = atom<Array<User>>({
  key: 'usersAtom',
  default: usersQuery(),
});
```

### Selectors

Selectors são transformadores de estado que podem derivar dados de Atoms ou outros Selectors. Funcionam como um sistema de cache inteligente:

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

O RecoilRoot é o componente que encapsula toda a árvore de componentes que utilizarão o RecoilJS:

```typescript
function App() {
  return (
    <RecoilRoot>
      <YourApp />
    </RecoilRoot>
  );
}
```

## Implementação Detalhada

### Gerenciamento de Usuários

Começamos implementando o gerenciamento de usuários com um Atom simples:

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

### Componente de Listagem

Criamos um componente reutilizável para exibir as entidades:

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

### Gerenciamento de Estado Compartilhado

Uma das características mais poderosas do RecoilJS é o atomFamily, que permite criar estados dinâmicos baseados em parâmetros:

```typescript
export const chainsAtom = atomFamily<Array<Chain>, number>({
  key: 'chainsAtom',
  default: (userId: number) => chainsQuery(userId),
});
```

### Atualizações em Tempo Real

Implementamos um hook personalizado para facilitar a edição de estados:

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

## Conclusão

O RecoilJS representa um avanço significativo no gerenciamento de estado para aplicações React. Sua API intuitiva, integração nativa com funcionalidades modernas do React e capacidade de lidar com estados complexos o tornam uma escolha excelente para projetos de qualquer escala.

A combinação de Atoms, Selectors e atomFamily oferece uma solução elegante para os desafios mais comuns no desenvolvimento de aplicações React, mantendo o código limpo e manutenível.

### Próximos Passos

Em breve, publicarei um artigo mais aprofundado sobre padrões avançados de edição de estado com RecoilJS. Fique atento!

### Recursos Adicionais

- [Código Fonte Completo](https://github.com/Gabrielgvl/recoil-demo-app)
- [Documentação Oficial do RecoilJS](https://recoiljs.org/)
- [Guia de Boas Práticas](https://recoiljs.org/docs/introduction/getting-started)
