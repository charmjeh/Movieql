## GraphQL
`graphql-yoga` : create-react-app과 비슷한 명령어로,graphQL 프로젝트를 빠르게 시작할 수 있다.

`over-fetching` : 요청한 영역의 정보보다, 많은 정보를 서버에서 받는다.
`under-fetching` : 하나를 완성하기 위해 많은 소스를 요청한다.

`schema`: 사용자에게 보내거나 받을 데이터에 대한 설명

`playground`: database test용, `postman`과 같은것으로, api문서와 같이 schema를 자동으로 생성하여 보여준다.

```javascript
// 기존 방식, 유저의 이메일만 필요하지만, 아래와 같이 필요없는 정보까지 함께 받게 된다.
GET /feed/
GET /user/1

res.data.items = {
    title
    content
    comments
    likeNumber
    ...
}
res.data.items = {
    email
    name
    githubId
    facebookId
    profilePic
    ...
}

// graphQL 방식, 필요한것만 받을 수 있다.
/graphql(only one endpoint, name can be changed)
query {
    user {
        username
        profilePic
    }
    feed {
        comments
        likeNumber
    }
}
{
    feed: [
        comments: 1,
        likeNumber: 20
    ],
    user: {
        userame: 'hongildong',
        profile: 'http:'
    }
}

```


```javascript
type Person {
    id: Int! // Int로 반드시(!) 리턴되어야한다. 
    name: String!
    age: Int!
    gender: String!
}

type Query {
    people: [Person]!
    person(id: Int!): Person // id로 person을 찾을 수 있다.
}
```

GraphQL Resolvers는 GraphQL 서버에서 요청을 받는다. GraphQL 서버가 Query나 Mutation의 정의를 발견하면, Resolver를 찾아 해당 함수를 실행한다. 여기에서 argument를 제공한다.

```javascript
// 첫번쨰 인자: 현재 Object를 보내는 object, 
// 두번쨰 인자 : arguments를 줌.
const resolvers = {
    Query: {
        people: () => people,
        person: (_, {
            id
        }) => getById(id)
    }
}
```

