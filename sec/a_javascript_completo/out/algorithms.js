
function quicksort(arr, start, end){
    
    if(start < end) {
        
        let pivotIndex = partition(arr, start, end);

        quicksort(arr, start, pivotIndex-1);
    
        quicksort(arr, pivotIndex+1, end);
    }

};

function partition(arr, start, end){
    let pivot=arr[start];
    let pivotIndex=end;

    for (let i = end; i > start; i--) {
        
        if(arr[i]>=pivot){
            swap(arr, i, pivotIndex);
            pivotIndex--;
        }
    }

    swap(arr, start, pivotIndex);
    return pivotIndex;
};

function swap(arr, a, b){
    let aux = arr[a];
    arr[a]=arr[b];
    arr[b]=aux;
}

function main(){
    let arr = [6,5,4,3,2,1];
    console.log(arr);

    quicksort(arr, 0, arr.length-1);
    
    console.log(arr);
}

if (module === require.main){
    main();
}



function mergesort(arr, start, end){
    int
}

function merge(arr, start, mid, end){
    
}
