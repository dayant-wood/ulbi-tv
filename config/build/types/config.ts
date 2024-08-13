
export type BuildMode = 'production' | 'development'
export interface BuildPaths {
   entry: string
   build: string
   html: string
}

export type BuildEnv = {
    port: number
    mode: BuildMode
}
export interface BuildOptions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
}