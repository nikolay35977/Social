import profileReducer, {setNewPost, deletePost} from "./ProfileReducer";
    // подготовить исходные данные
    let state = {
        PostsData: [
            {id: 1, text: "Hi", likes: 3},
            {id: 2, text: "How are you", likes: 5},
            {id: 3, text: "It's my first post", likes: 33},
            {id: 4, text: "Are you", likes: 2},
            {id: 5, text: "Baby", likes: 1}
        ]
    };
    
it('new post should be added', () => {
    // подготовить action
    let action = setNewPost("New post");
    let newState = profileReducer(state,action);
    //проверяем ожидание
    expect(newState.PostsData.length).toBe(6);
})

it('message of new post should be correct', () => {
    // подготовить action
    let action = setNewPost("New post");
    let newState = profileReducer(state,action);
    //проверяем ожидание
    expect(newState.PostsData[newState.PostsData.length - 1].text).toBe("New post");
})

//1 expect ===== 1 it для удобства

it('new post should be delete', () => {
    // TDD
    // пишем тест на несуществующую фукцию, запускаем его (все плохо)
    // потом определяем функцию, запускаем тест (все хорошо)
    // определяем будущий state и закидываем данные в функцию (все плохо)
    // пишем тело функции (все хорошо)
    let action = deletePost(1);
    let newState = profileReducer(state,action);
    //проверяем ожидание
    expect(newState.PostsData.length).toBe(4);
})