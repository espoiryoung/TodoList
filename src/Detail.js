const Detail = () =>{
    /* dummy todo */ 
    const dummyTodo = 
    {   date: 1708487204189,
        name:"팀 회의",
        dropdownMenu: "한 번 만",
        time: "오후 9시",//toLocaleTimeString()
        tag:"학교",
        star: 5,
        memo: "줌, 늦으면 벌금 5천원"
    };

    //const year= new Date().getFullYear;

    return (
        <div>
            <section className = "todo_date">
                <div>
                    {`${new Date(parseInt(dummyTodo.date)).getMonth()+1}월 ${new Date(parseInt(dummyTodo.date)).getUTCDate()}일`}
                </div>
            </section>
            <section className = "detail-button">
                <button>수정하기</button>
                <button>삭제하기</button>
            </section >
            <section className ="todo">
                <div>{dummyTodo.name} {dummyTodo.tag} {dummyTodo.star}</div>
                <div>{dummyTodo.dropdownMenu}</div>
                <div>{dummyTodo.time}</div>
                
            </section>
            <section className="todo-memo">메모
                <div>{dummyTodo.memo}</div>
            </section>
        </div>
    );
}

export default Detail