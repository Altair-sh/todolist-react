export interface TodoItem {
    id: number
    label: string
    important: boolean
    done: boolean
}

export type FilterStatus = 'all' | 'important' | 'active' | 'done'
