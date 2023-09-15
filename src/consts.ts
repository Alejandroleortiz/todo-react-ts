export const TODO_Filters = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const

export const FILTERS_BUTTONS = [
    [TODO_Filters.ALL], {
        literal: 'Todos',
        href: `/?filter=${TODO_Filters.ALL}`
    },
    [TODO_Filters.ACTIVE], {
        literal: 'Activos',
        href: `/?filter=${TODO_Filters.ACTIVE}`
    },
    [TODO_Filters.COMPLETED], {
        literal: 'Completed',
        href: `/?filter=${TODO_Filters.COMPLETED}`
    }
] as const