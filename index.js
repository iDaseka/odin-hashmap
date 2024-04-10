class Node{
    constructor(key, value, nextNode = null){
        this.key = key;
        this.value = value;
        this.nextNode = nextNode;
    }
}

class HashMap{
    constructor(){
        this.head = null;
    }
    hash(key){
        let hashCode = 0;

        const primeN = 31;
        for (let i = 0; i < key.length; i++){
            hashCode = primeN * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    };//
    set(key, value){
        let hashCode = this.hash(key);
        let newNode = new Node(key, value);
        if (!this.head){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while (current.nextNode){
                if (current.key === key){
                    current.value = value;
                    return;
                }
                current = current.nextNode;
            }
            if (current.key === key){
                current.value = value;
            }
            else{
                current.nextNode = newNode;
            }
        }

        if (this.length() / this.buckets.length > 0.7){
            this.resize();
        }
    };//
    resize(){
        const newSize = this.buckets.length * 2;
        const newBuckets = new Array(newSize).fill(null);

        this.buckets = newBuckets;
    };//
    get(key){
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        };

        let current = this.head;
        while (current){
            if (current.key === key){
                return current.value;
            }
            current = current.nextNode;
        }
        return null;
    };//
    has(key){
        let current = this.head;
        while (current){
            if (current.key === key){
                return true;
            }
            current = current.nextNode;
        }
        return false;
    };//
    remove(key){
        let current = this.head;
        let prev = null;
        while (current){
            if (current.key === key){
                if (prev === null){
                    this.head = current.nextNode;
                }
                else{
                    prev.nextNode = current.nextNode;
                }
                return true;
            }
            prev = current;
            current = current.nextNode;
        }
        return false;
    };//
    length(){
        let current = this.head;
        let count = 0;
        while (current){
            count++;
            current = current.nextNode;
        }
        return count;
    };//
    clear(){
            let current = this.head;
            while (current){
                let temp = current.nextNode;
                current.nextNode = null;
                current = temp;
            }
            this.head = null;
    };//
    keys(){
        let keyArray = [];
        let current = this.head;

        while (current){
            keyArray.push(current.key);
            current = current.nextNode;
        }
        return keyArray;
    };//
    values(){
        let valueArray = [];
        let current = this.head;

        while (current){
            valueArray.push(current.value);
            current = current.nextNode;
        }
        return valueArray;
    };//
    entries(){
        let key = '';
        let value = '';
        let array = [];
        let current = this.head;

        while (current){
            key = current.key;
            value = current.value;
            array.push([key , value]);
            current = current.nextNode;
        }
        return array;
    };//
}