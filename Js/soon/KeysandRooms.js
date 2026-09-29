//There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 
//Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.
//Initially, all the rooms start locked (except for room 0). 
//Return true if and only if you can enter every room.

//Input: [[1],[2],[3],[]]
//Output: true
//Explanation:  
//We start in room 0, and pick up key 1.
//We then go to room 1, and pick up key 2.
//We then go to room 2, and pick up key 3.
//We then go to room 3.  Since we were able to go to every room, we return true.

//Input: [[1,3],[3,0,1],[2],[0]]
//Output: false
//Explanation: We can't enter the room with number 2.

const canVisitAllRooms = (rooms) => {
     let set = new Set() , table =[];
    set.add(0);
    table.push(0)
    while(table.length){
        let node = table.shift();
        for(let room of rooms[node]){
            if(!set.has(room)){
                set.add(room)
                table.push(room)
            }
        }
    }
    return [...set].length === rooms.length 
};
