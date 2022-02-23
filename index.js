var arr = ['', '', '', '', '', '', '', '', '']
var ids = ['', '', '', '', '', '', '', '', '']
var dict = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',

}
var r = 0
var cur = ''
var pre = ''
var flag = 0

function dragpoint(e) {
    e.currentTarget.style.border = 'none'
    e.dataTransfer.setData('xoro', e.target.id)
    e.effectAllowed = "copyMove";
}

function droppoint(e) {

    cur = e.dataTransfer.getData('xoro')
    if (arr[r] == '' && !ids.includes(e.target.id) && cur != pre) {
        arr[r] = e.dataTransfer.getData('xoro')
        ids[r] = e.target.id

        if (ids[r] == 'a') {
            dict[1] += arr[r]
            dict[4] += arr[r]
            dict[7] += arr[r]
        }
        if (ids[r] == 'b') {
            dict[1] += arr[r]
            dict[5] += arr[r]
        }
        if (ids[r] == 'c') {
            dict[1] += arr[r]
            dict[6] += arr[r]
            dict[8] += arr[r]
        }
        if (ids[r] == 'd') {
            dict[2] += arr[r]
            dict[4] += arr[r]
        }
        if (ids[r] == 'e') {
            dict[2] += arr[r]
            dict[5] += arr[r]
            dict[7] += arr[r]
            dict[8] += arr[r]
        }
        if (ids[r] == 'f') {
            dict[2] += arr[r]
            dict[6] += arr[r]
        }
        if (ids[r] == 'g') {
            dict[3] += arr[r]
            dict[4] += arr[r]
            dict[8] += arr[r]

        }
        if (ids[r] == 'h') {
            dict[3] += arr[r]
            dict[5] += arr[r]
        }
        if (ids[r] == 'i') {
            dict[3] += arr[r]
            dict[6] += arr[r]
            dict[7] += arr[r]
        }


        console.table(dict)
        if ((arr[r] == 'X' || arr[r] == 'O') && e.target.id != '') {
            console.log(arr[r], ids[r], r)
            var nodeCopy = document.getElementById(arr[r]).cloneNode(true);
            nodeCopy.id = e.target.id;
            e.target.appendChild(nodeCopy);


        }

        if (dict[1].length == 3) {
            if (dict[1] == 'XXX') {
                flag = 1
                window.alert('X is the winner')
                window.location.reload()
            }
            if (dict[1] == 'OOO') {
                flag = 1
                window.alert('O is the winner')
                window.location.reload()
            }
        }
        if (dict[2].length == 3) {
            if (dict[2] == 'XXX') {
                flag = 1
                window.alert('X is the winner')
                window.location.reload()
            }
            if (dict[2] == 'OOO') {
                flag = 1
                window.alert('O is the winner')
                window.location.reload()
            }
        }
        if (dict[3].length == 3) {
            if (dict[3] == 'XXX') {
                flag = 1
                window.alert('X is the winner')
                window.location.reload()
            }
            if (dict[3] == 'OOO') {
                flag = 1
                window.alert('O is the winner')
                window.location.reload()
            }
        }
        if (dict[4].length == 3) {
            if (dict[4] == 'XXX') {
                flag = 1
                window.alert('X is the winner')
                window.location.reload()
            }
            if (dict[4] == 'OOO') {
                flag = 1
                window.alert('O is the winner')
                window.location.reload()
            }
        }
        if (dict[5].length == 3) {
            if (dict[5] == 'XXX') {
                flag = 1
                window.alert('X is the winner')
                window.location.reload()
            }
            if (dict[5] == 'OOO') {
                flag = 1
                window.alert('O is the winner')
                window.location.reload()
            }
        }
        if (dict[6].length == 3) {
            if (dict[6] == 'XXX') {
                flag = 1
                window.alert('X is the winner')
                window.location.reload()
            }
            if (dict[6] == 'OOO') {
                flag = 1
                window.alert('O is the winner')
                window.location.reload()
            }
        }
        if (dict[7].length == 3) {
            if (dict[7] == 'XXX') {
                flag = 1
                window.alert('X is the winner')
                window.location.reload()
            }
            if (dict[7] == 'OOO') {
                flag = 1
                window.alert('O is the winner')
                window.location.reload()
            }
        }
        if (dict[8].length == 3) {
            if (dict[8] == 'XXX') {
                flag = 1
                window.alert('X is the winner')
                window.location.reload()
            }
            if (dict[8] == 'OOO') {
                flag = 1
                window.alert('O is the winner')
                window.location.reload()
            }
        }
        if (dict[1].length == 3 && dict[2].length == 3 && dict[3].length == 3 && dict[4].length == 3 && dict[5].length == 3 && dict[6].length == 3 && dict[7].length == 3 && dict[8].length == 3) {
            if (flag == 0) {
                alert('Match Drawn')
                window.location.reload()
            }
        }

        pre = cur
        r += 1
    }
    else {
        alert('Wrong Move')
    }



}



function allowdrop(e) {
    e.preventDefault()
}

function dragover(e) {
    e.currentTarget.style.border = '0.1em solid orange'
    e.dataTransfer.clearData()
}
