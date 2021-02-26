// Input: ghosts = [[1,0],[0,3]], target = [0,1]
// Output: true

// Input: ghosts = [[1,0]], target = [2,0]
// Output: false

// Input: ghosts = [[2,0]], target = [1,0]
// Output: false

// Input: ghosts = [[-1,0],[0,1],[-1,0],[0,1],[-1,0]], target = [0,0]
// Output: true

const escapeGhosts = (ghosts, target) => {
    for (let ghost of ghosts) {
        if (Ghosts(ghost, target) <= Target(target)) return false;
    }
    return false;
};

const Target = (target) => {
    return Math.abs(target[0]) + Math.abs(target[1]);
};

const Ghosts = (ghost, target) => {
    return Math.abs(ghost[0] - target[0]) + Math.abs(ghost[1] - target[1]);
};
