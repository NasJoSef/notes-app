import React, { useState } from 'react'
import TagInput from '../../components/input/TagInput'
import { MdClose } from 'react-icons/md'

export default function AddEditNotes({ noteData, type, onClose }) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tags, setTags] = useState([])

    const [error, setError] = useState("")

    const addNewNote = async () => {

    }

    const editNote = async () => {

    }

    const handleAddNote = () => {
        if(!title) {
            setError("Please enter the title")
            return
        }
        if(!content) {
            setError("Please enter the content")
            return
        }
        if(type === "edit") {
            editNote()
        }else{
            addNewNote()
        }

        setError("")
    }
    return (
        <div className='relative'>
            <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3 hover:bg-slate-50' onClick={onClose}>
                <MdClose className="text-xl text-slate-400" />
            </button>
            <div className='flex flex-col gap-2'>
                <label className='input-label'>Title</label>
                <input
                    type='text'
                    className='text-2xl text-slate-950 outline-none'
                    placeholder='Go to Gym at 5'
                    value={title}
                    onChange={(e) => setTitle(e.target.value) }
                />
            </div>
            <div className='flex flex-col gap-2 mt-4'>
                <label className='input-label'>Content</label>
                <textarea
                    className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
                    placeholder='Content'
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className='mt-3'>
                <label className='input-label'>Tags</label>
                <TagInput
                    tags={tags}
                    setTags={setTags}
                />
            </div>
            { error && <p className='text-red-500 text-xs pt-4'>{error}</p>}
            <button className='btn-primary font-medium mt-5 p-3' onClick={handleAddNote}>
                Add
            </button>
        </div>
    )
}
