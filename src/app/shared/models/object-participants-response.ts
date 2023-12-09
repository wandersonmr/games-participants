export interface ObjectParticipantsResponse {
    1: ParticipantResponse[],
    2: ParticipantResponse[],
    3: ParticipantResponse[],
    4: ParticipantResponse[],
    5: ParticipantResponse[],
    6: ParticipantResponse[],
    7: ParticipantResponse[],
    8: ParticipantResponse[],
    9: ParticipantResponse[],
    10: ParticipantResponse[]
}

export interface ParticipantResponse {
    id: number,
    ["First Name"]: string,
    ["Last Name"]: string,
    ["Banned"]: boolean
}