//heap이란? 완전 이진 트리
//Max Heap, Min Heap 으로 구분할 수 있음

//Max Heap
// 부모 노드의 키 값이 자식 노드의 키 값보다 크거나 같은 완전 이진 트리
// key(부모 노드) >= key(자식 노드)

//Min Heap
// 부모 노드의 키 값이 자식 노드의 키 값보다 작거나 같은 완전 이진 트리
// key(부모 노드) <= key(자식 노드)

//heap을 구현할 때 사용하는 자료구조는 '배열'


//왼쪽 자식의 index == 부모 index * 2
//오른쪽 자식의 index == (부모 index * 2)
//부모 index = 자식의 (index / 2) (Math.floor(자식 index / 2), ceil XX)


//MAX Heap을 기준으로 함
class Heap {

    constructor() {
        //배열의 첫 원소는 사용하지 X
        this.heap = [ null ];
    }

    heapsize() {
        return this.heap.length;
    }

    //heap 삽입
    insert(data) {
        //트리(배열)의 마지막에 삽입함
        //그러니까, 배열의 크기를 알아야하는데
        //이건 heapsize()함수를 이용할거임
        this.heap.push(data);
        let index = this.heapsize() - 1

        //부모 노드와 삽입된 data 값 비교를 해야하는데
        //그러면 부모의 위치를 알아야함
        let parent = (index - 1) / 2;

        //삽입된 data가 더 큰 숫자라면 교환
        // if(parent < index)   {
        //     [parent, index] = [index, parent]
        // }

        //근데 한번만 교환하는게 아니라
        //삽입된 데이터가 부모 노드의 데이터값보다 작아지는 때까지
        //해줘야함, 반복필요

        //세상에
        //while문이 계속 헛돌길래 뭔지 몰랐는데
        // this.heap[parent] < thie.heap[data]
        //이렇게 비교해주고있었음

        if(this.heapsize() == 2)
            return ;

        while (this.heap[parent] < this.heap[index]) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent;
            parent = Math.floor((index) / 2);

            if(parent == 0)
                return ;
        }
    }

    //heap 삭제
    delete() {

        //삭제된 루트 노드에 힙의 마지막 노드를 가져옴
        //힙의 마지막 노드를 알려면? 
        //이 lastNode를 어떻게 위에다가 넣지?
        let parent = 1;
        let child = 2;
        let last = this.heapsize() - 1;
        let lastValue = this.heap[last];

        [this.heap[last], this.heap[1]] = [this.heap[1], this.heap[last]]
        let returnValue = this.heap.pop();

        //힙 재구성 --> 어떻게??
        //루트 노드와 자식 노드의 위치를 교환해주는데,
        //이때 자식 노드들 중 더 큰 값을 가진 자식 노드와 교환해줘야한다.
        // if(this.heap[child] < this.heap[child + 1])
        //     [this.heap[parent], this.heap[child + 1]] = [this.heap[child + 1], this.heap[parent]]
        // else
        //     [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]]

        //근데 트리 레벨을 내려가면서 정리해줘야하는거니까
        //언제까지 돌아야하지? 
        while (child <= this.heap.length) {


            //아 이거 꼬이는데;

            if (this.heap[child] < this.heap[child + 1])
                [this.heap[parent], this.heap[child + 1]] = [this.heap[child + 1], this.heap[parent]]
            else
                [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]]

            //세상에 여기가 문제였음;
            //아니 그러니까.. 음
            //처음에 이 부분을 this.heap[last] 라고 써놔서
            //계속 헛돌면서 종료가 안됐음....
            //근데 현재 시점에서 heap의 가장 마지막 값이 아니라, 삭제되기 전 heap의 마지막 값을 봐야했음.. 
            if(lastValue >= this.heap[child])
                return ;

            //레벨 아래로 이동
            parent = child;
            child *= 2;
        }

        this.heap[parent] = last;


        return returnValue;
    }

}

let heap = new Heap();

heap.insert(5);
heap.insert(1);
heap.insert(4);
heap.insert(0);
heap.insert(7);

console.log(heap);

heap.delete();

console.log(heap);
