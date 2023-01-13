//heap이란? 완전 이진 트리
//모든 노드에 저장된 값(우선순위)들은 자식 노드들의 것보다 (우선순위가) 크거나 같다


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
//생각해보니..? 이게? 우선순위 큐 아니신지?
class MAXheap {

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
        let index = this.heapsize() - 1; //1부터 시작

        //부모 노드와 삽입된 data 값 비교를 해야하는데
        //그러면 부모의 위치를 알아야함
        let parent = Math.floor(index / 2);
        
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

        //heap에 데이터가 처음 들어오는거라면?
        //비교될 필요가 없이 그냥 삽입만 되면 됨
        while (index > 1 && this.heap[parent] < this.heap[index]) {         
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            
            index = parent;
            parent = Math.floor(index / 2);
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

        [this.heap[last], this.heap[1]] = [this.heap[1], this.heap[last]]
        this.heap.pop();

        //힙 재구성 --> 어떻게??
        //루트 노드와 자식 노드의 위치를 교환해주는데,
        //이때 자식 노드들 중 더 큰 값을 가진 자식 노드와 교환해줘야한다.
        // if(this.heap[child] < this.heap[child + 1])
        //     [this.heap[parent], this.heap[child + 1]] = [this.heap[child + 1], this.heap[parent]]
        // else
        //     [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]]

        //근데 트리 레벨을 내려가면서 정리해줘야하는거니까
        //언제까지 돌아야하지? 

        //얘 어떻게 돌아갔던거임?????????
        while (child <= this.heap.length) {

            //만약 자식 노드들의 값이 모두 동일하다면
            //왼쪽으로 이동해줌
            if (this.heap[child] < this.heap[child + 1])    {
                [this.heap[parent], this.heap[child + 1]] = [this.heap[child + 1], this.heap[parent]]
                
                
                parent = child + 1;
                child = (parent * 2);
            }
            else if(this.heap[child] >= this.heap[child + 1])    {
                [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]]

                //레벨 아래로 이동
                parent = child;
                child = parent * 2;
            }
            else
                return ;

        }
    }
}

//MIN Heap
class MINHeap {

    constructor() {
        //배열의 첫 원소는 사용하지 X
        this.heap = [ null ];
    }

    heapsize() {
        return this.heap.length;
    }

    //heap 삽입
    insert(data) {
        this.heap.push(data);
        
        let index = this.heapsize() - 1; //1부터 시작
        let parent = Math.floor(index / 2);
        
        while (index > 1 && this.heap[parent] > this.heap[index]) {         
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            
            index = parent;
            parent = Math.floor(index / 2);
        }
    }

    //heap 삭제
    delete() {

        let parent = 1;
        let child = 2;
        let last = this.heapsize() - 1;

        [this.heap[last], this.heap[1]] = [this.heap[1], this.heap[last]]
        this.heap.pop();

        while (child <= this.heap.length) {

            //만약 자식 노드들의 값이 모두 동일하다면
            //왼쪽으로 이동해줌
            if (this.heap[child] > this.heap[child + 1])    {
                [this.heap[parent], this.heap[child + 1]] = [this.heap[child + 1], this.heap[parent]]
                
                
                parent = child + 1;
                child = (parent * 2);
            }
            else if(this.heap[child] <= this.heap[child + 1])    {
                [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]]

                //레벨 아래로 이동
                parent = child;
                child = parent * 2;
            }
            else
                return ;

        }
    }
}

// let maxheap = new MAXheap();

// maxheap.insert(5);
// maxheap.insert(7);
// maxheap.insert(1);
// maxheap.insert(4);
// maxheap.insert(0);
// maxheap.insert(5);
// maxheap.insert(11);
// maxheap.insert(0);
// maxheap.insert(1);
// maxheap.insert(9);
// maxheap.insert(7);
// maxheap.insert(5); 

// console.log(maxheap);

// maxheap.delete();

// console.log(maxheap);

let minheap = new MINHeap();

minheap.insert(5);
minheap.insert(7);
minheap.insert(1);
minheap.insert(4);
minheap.insert(0);
minheap.insert(5);
minheap.insert(11);
minheap.insert(0);
minheap.insert(1);
minheap.insert(9);
minheap.insert(7);
minheap.insert(5); 

console.log(minheap);

minheap.delete();
minheap.delete();

console.log(minheap);


