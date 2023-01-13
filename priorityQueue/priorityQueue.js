//프로젝트에서 우선순위에 따라 유저끼리 매칭되는 부분이 필요해서
//우선순위에 관련한 알고리즘부터 먼저 구현해봄 --> 우선순위 큐
//관련 프로젝트 https://github.com/JeeIn-Shin/codeReview
//C++에서는 내장 라이브러리가 존재했지만, JS에는 없다길래 직접 구현해야함
//이런...

//물론 npm priority queue package가 있는건 알고있음
//https://www.npmjs.com/package/priority-queue
//근데 좀.. 변형이 필요해서 암튼 직접 구현함

//우선순위 큐는

//배열 및 연결리스트로 구현하거나
//힙으로 구현하는 두가지 방법이 있는데

//배열 및 연결리스트로 구현하는 것은 시간복잡도가 O(N)이기 때문에
//힙으로 구현하는 것이 좋다고 한다. 시간복잡도 O(logN)

//저번에 구현한 힙을 그대로 사용할껀데 (생각해보니 그게 그냥 우선순위 큐였음)
//우선순위는 어떻게 계산해줄까?
//이번에는 내가 임의로 정해주자.

//필요한거 우선순위 계산하기 가중치라고 하나?
//DB에서 가져올 수 있는지도
//에이잉ㅇ...........

class priorityQueue  {
    
    constructor()   {
        this.node = [ null ];
    }

    enpueue(id, data)  {
        const list = { id, data };

        this.node.push(list);

        let cur = this.node.length - 1;
        let parent = Math.floor(cur / 2);

        while(cur > 1) {
            if(this.node[parent].data > this.node[cur].data)
                [ this.node[parent], this.node[cur] ] = [ this.node[cur], this.node[parent] ];
         
            cur = parent;
            parent = Math.floor(cur / 2);
        }
    }

    depueue()   {
        let last = this.node.length - 1;
        let parent = 1;
        let child = 2;

        [ this.node[parent], this.node[last]] = [ this.node[last], this.node[parent] ]
        let deleteValue = this.node.pop();

        while(child < this.node.length - 1) {           
            if(this.node[child].data > this.node[child + 1].data)    {
                [ this.node[parent], this.node[child + 1] ] = [ this.node[child + 1], this.node[parent] ]
                
                parent = child + 1;
                child = parent * 2;                
            }
            else if(this.node[child].data <= this.node[child + 1].data)   {
                [ this.node[parent], this.node[child] ] = [ this.node[child], this.node[parent] ]
            
                parent = child;
                child = parent * 2;
            }
            else
                return ;
        }
        return deleteValue;
    }
}


module.exports = priorityQueue;