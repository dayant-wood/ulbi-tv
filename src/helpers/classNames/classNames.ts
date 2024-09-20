
type Mods = Record<string, string | boolean>
export function classNames (cls: string, mods: Mods, addFields: string[]): string {

    return [cls, ...addFields,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)

    ].join(' ')
}