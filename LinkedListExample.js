function hasCycle(head) {

    let checkNode = this.head;
    let tailCheck = this.tail;


    while(checkNode!==this.tail){


        if(!(tailCheck.next===checkNode)){
            checkNode= checkNode.next;

        }else{
            return true
        }
        return false;
    }

}
