# perfect-React-Study-Maximilian-
Side-Project 1


섹션 5-74

filteredExpenses.length === 0 && <h1>데이터가 없습니다.</h1> : &&(And연산자) 뒤에 있는 구문이 true 이면 &&(And연산자) 앞에 있는 구문이 실행된다.

이것보다 JSX를 조금더 보기 쉽게 만들어주는 구문은 아래처럼 변수에 문장을 담아주는 것 이다.

let contextExpress = <h1>데이터가 없습니다.</h1>

  if(filteredExpenses.length > 0) {
    contextExpress = filteredExpenses.map((items) =>  
        <ExpenseItem
          key = {items.id}
          title = {items.title}
          amount = {items.amount}
          date = {items.date}
        />)
  }


섹션 5-75