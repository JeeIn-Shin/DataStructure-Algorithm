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

    constructor()   {
        //배열의 첫 원소는 사용하지 X
        this.heap = [];
    }

    heapsize()  {
        return this.heap.length;
    }

    //heap 삽입
    insert(data)  {
        //트리(배열)의 마지막에 삽입함
        //그러니까, 배열의 크기를 알아야하는데
        //이건 heapsize()함수를 이용할거임
        this.heap.push(data);
        let index = this.heapsize() - 1

        //부모 노드와 삽입된 data 값 비교를 해야하는데
        //그러면 부모의 위치를 알아야함
        let parent = Math.floor((index - 1) / 2)

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
        while(this.heap[parent] < this.heap[index])    {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    //heap 삭제
    heappop()   {
        //루트노드가 삭제됨

        //삭제된 루트 노드에 힙의 마지막 노드를 가져옴

        //힙 재구성 --> 어떻게??
    }

}

let heap = new Heap();

heap.insert(5);
heap.insert(1);
heap.insert(4);
heap.insert(0);
heap.insert(7);


console.log(heap);
