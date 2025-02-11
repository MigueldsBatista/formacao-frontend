//Elementos

const notesContainer = document.querySelector("#notes-container")

const noteInput = document.querySelector("#note-content")

const addNoteBtn = document.querySelector("#add-note")
const exportBtn = document.querySelector("#export-notes");

const searchInput = document.querySelector("#search-input");


//Funções

// <div class="note fixed">
// <textarea name="" id="" placeholder="Adicione algum texto"></textarea>
// <i class="bi bi-pin"></i>
// <i class="bi bi-x-lg"></i>
// <i class="bi bi-file-earmark-plus"></i>
// </div>

class NoteHandler {

    constructor(noteObject){
        noteObject=noteObject
    }
    static getNotesLocalStorage(){
        return JSON.parse(localStorage.getItem("notes")) || [];
    }

    static addNoteLocalStorage (noteObject) {
        const notes = this.getNotesLocalStorage();
        console.log("NOTAS ", notes);
        
        notes.push(noteObject);
        console.log("NOTAS ", notes);

        localStorage.setItem("notes", JSON.stringify(notes))

    }

    static removeNoteLocalStorage(noteId){
        const notes = this.getNotesLocalStorage();

        const filtered = notes.filter((note)=>{
            return note.id != noteId;//
        })
        console.log("Filtradas ",filtered);
        
        localStorage.setItem("notes", JSON.stringify(filtered))
    }

    static updateNoteLocalStorage(newNoteObject){
        const notes = this.getNotesLocalStorage();

        const updated = notes.map((note)=>{
            if(note.id==newNoteObject.id){//pq === não vai ser verdadeiro?
                console.log(`Match on ID: ${newNoteObject.id}`);
                return newNoteObject;
            }
                
            console.log("No mach");
            
            return note
        })
        
        localStorage.setItem("notes", JSON.stringify(updated))
    }


    static searchNotes(searchString){
        console.log(`Searching ${searchString}`);
        
        const notes = this.getNotesLocalStorage();
        let normalized = searchString.toLowerCase().trim();
        const matches = notes.filter((candidate)=>{
            let normalizedCandidate = candidate.content.toLowerCase().trim();
            return normalizedCandidate.includes(normalized);
        })
        return matches;
    }
}


const loadNotes = (LoadedNotes=null) =>{
    cleanNotes();
    console.log("Loading notes...");
    
    let notes = NoteHandler.getNotesLocalStorage();
    if(LoadedNotes){
        notes=LoadedNotes;
    }

    

    console.log(`Found ${notes.length} Notes`);
    const orderedNotes = notes.sort((a,b)=>{
        return a.fixed > b.fixed ? -1 : 1;
    })
    orderedNotes.forEach(nt => {
        const noteElement = createNote(nt.id, nt.content, nt.fixed);
        addNote(noteElement);
    });
    return 


}



const addNote = ()=>{

    const NoteValue = noteInput.value;
    if(!NoteValue) return;

    const noteObject = {
        id:generateId(),
        fixed:false,
        content:NoteValue
    }

    NoteHandler.addNoteLocalStorage(noteObject)
    

    createNote(noteObject.id, noteObject.content)

    noteInput.value="";
    noteInput.focus();


}

const generateId = () =>{
    return Math.floor(Math.random()*5000)
}

const createNote = (noteId, noteContent, fixed = false) => {
    const noteDiv = document.createElement("div");
    noteDiv.classList.add("note");
    if (fixed) noteDiv.classList.add("fixed");

    // Criação do textarea
    const noteTextarea = document.createElement("textarea");
    noteTextarea.placeholder = "Adicione algum texto";
    noteTextarea.value = noteContent;

    // Atualiza o conteúdo ao digitar
    noteTextarea.addEventListener("input", () => {
        const updatedContent = noteTextarea.value;
        NoteHandler.updateNoteLocalStorage({ id: noteId, content: updatedContent, fixed});
    });

    // Input hidden para armazenar o ID da nota
    const noteIdInput = document.createElement("input");
    noteIdInput.type = "hidden";
    noteIdInput.value = noteId;

    // Botões de ação
    const pinBtn = createIconButton("bi-pin", () => togglePin(noteId, noteContent, noteDiv));
    const deleteBtn = createIconButton("bi-x-lg", () => removeNote(noteId));
    const duplicateBtn = createIconButton("bi-file-earmark-plus", () => duplicateNote(noteContent, fixed));

    // Monta a estrutura da nota
    noteDiv.append(noteTextarea, pinBtn, deleteBtn, duplicateBtn, noteIdInput);

    notesContainer.appendChild(noteDiv);

    return noteDiv;
};

  
  // Criar botão de ícone com evento
  const createIconButton = (iconClass, onClickFunction) => {
    const btn = document.createElement("i");
    btn.classList.add("bi", iconClass);
    btn.addEventListener("click", onClickFunction);
    return btn;
  };


  // Eventos de manipulação
const togglePin = (noteId, noteContent, noteDiv) => {
    const isFixed = noteDiv.classList.toggle("fixed");
    console.log(isFixed);
    
    NoteHandler.updateNoteLocalStorage({ id: noteId, content: noteContent, fixed: isFixed });

    loadNotes();
  };

  

  const removeNote = noteId => {
    NoteHandler.removeNoteLocalStorage(noteId);
    loadNotes();
  };
  

  const duplicateNote = (noteContent, fixed) => {
    const newNoteObject = {
      id: generateId(),
      content: noteContent,
      fixed: fixed
    };
    NoteHandler.addNoteLocalStorage(newNoteObject);
    loadNotes();
  };


  const updateContent =(noteContent, noteTextarea)=>{
    noteTextarea.value=noteContent
  }
function cleanNotes(){

    notesContainer.replaceChildren([]);
}

function exportToCSV(){
    const notes = NoteHandler.getNotesLocalStorage();
    const mapped = notes.map((note)=>{
        return `${note.id},${note.content},${note.fixed}\n`;
    });
    mapped.unshift("id,content,fixed\n"); // Add header to the array
    const csvContent = mapped.join(""); // Join array elements into a single string
    const link = document.createElement("a");
    link.href = `data:text/csv;charset=utf-8,${encodeURI(csvContent)}`;
    link.target = "_blank";
    link.download = "notes.csv";
    link.click();
}

loadNotes();

addNoteBtn.addEventListener("click", addNote)


searchInput.addEventListener("input", (e)=>{
    let input = e.target.value;
    console.log(input);
    if(!input){
        loadNotes();
        return;
    };
    
    const candidates = NoteHandler.searchNotes(input);
    loadNotes(candidates);
})


exportBtn.addEventListener("click", exportToCSV)