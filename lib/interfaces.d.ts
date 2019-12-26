export declare enum IOSCategory {
    Playback = "playback",
    PlayAndRecord = "playAndRecord",
    MultiRoute = "multiRoute",
    Ambient = "ambient",
    SoloAmbient = "soloAmbient",
    Record = "record"
}
export declare enum IOSCategoryMode {
    Default = "default",
    GameChat = "gameChat",
    Measurement = "measurement",
    MoviePlayback = "moviePlayback",
    SpokenAudio = "spokenAudio",
    VideoChat = "videoChat",
    VideoRecording = "videoRecording",
    VoiceChat = "voiceChat",
    VoicePrompt = "voicePrompt"
}
export declare enum IOSCategoryOptions {
    MixWithOthers = "mixWithOthers",
    DuckOthers = "duckOthers",
    InterruptSpokenAudioAndMixWithOthers = "interruptSpokenAudioAndMixWithOthers",
    AllowBluetooth = "allowBluetooth",
    AllowBluetoothA2DP = "allowBluetoothA2DP",
    AllowAirPlay = "allowAirPlay",
    DefaultToSpeaker = "defaultToSpeaker"
}
export interface PlayerOptions {
    minBuffer?: number;
    maxBuffer?: number;
    playBuffer?: number;
    maxCacheSize?: number;
    iosCategory?: IOSCategory;
    iosCategoryMode?: IOSCategoryMode;
    iosCategoryOptions?: IOSCategoryOptions[];
    /**
     * Indicates whether the player should automatically delay playback in order to minimize stalling.
     * Defaults to `false`.
     */
    waitForBuffer?: boolean;
    /**
     * Indicates whether the player should automatically update now playing metadata data in control center / notification.
     * Defaults to `true`.
     */
    automaticallyUpdateNowPlayingInfo?: boolean;
}
export declare enum RatingType {
    Heart,
    ThumbsUpDown,
    ThreeStars,
    FourStars,
    FiveStars,
    Percentage
}
export interface FeedbackOptions {
    /** Marks wether the option should be marked as active or "done" */
    isActive: boolean;
    /** The title to give the action (relevant for iOS) */
    title: string;
}
export declare enum Capability {
    Play,
    PlayFromId,
    PlayFromSearch,
    Pause,
    Stop,
    SeekTo,
    Skip,
    SkipToNext,
    SkipToPrevious,
    JumpForward,
    JumpBackward,
    SetRating,
    Like,
    Dislike,
    Bookmark
}
export declare type ResourceObject = number;
export interface MetadataOptions {
    ratingType?: RatingType;
    jumpInterval?: number;
    likeOptions?: FeedbackOptions;
    dislikeOptions?: FeedbackOptions;
    bookmarkOptions?: FeedbackOptions;
    stopWithApp?: boolean;
    capabilities?: Capability[];
    notificationCapabilities?: Capability[];
    compactCapabilities?: Capability[];
    icon?: ResourceObject;
    playIcon?: ResourceObject;
    pauseIcon?: ResourceObject;
    stopIcon?: ResourceObject;
    previousIcon?: ResourceObject;
    nextIcon?: ResourceObject;
    rewindIcon?: ResourceObject;
    forwardIcon?: ResourceObject;
    color?: number;
}
export declare enum Event {
    PlaybackState = "playback-state",
    PlaybackError = "playback-error",
    PlaybackQueueEnded = "playback-queue-ended",
    PlaybackTrackChanged = "playback-track-changed",
    RemotePlay = "remote-play",
    RemotePlayId = "remote-play-id",
    RemotePlaySearch = "remote-play-search",
    RemotePause = "remote-pause",
    RemoteStop = "remote-stop",
    RemoteSkip = "remote-skip",
    RemoteNext = "remote-next",
    RemotePrevious = "remote-previous",
    RemoteJumpForward = "remote-jump-forward",
    RemoteJumpBackward = "remote-jump-backward",
    RemoteSeek = "remote-seek",
    RemoteSetRating = "remote-set-rating",
    RemoteDuck = "remote-duck",
    RemoteLike = "remote-like",
    RemoteDislike = "remote-dislike",
    RemoteBookmark = "remote-bookmark"
}
export declare enum TrackType {
    Default = "default",
    Dash = "dash",
    HLS = "hls",
    SmoothStreaming = "smoothstreaming"
}
export declare enum PitchAlgorithm {
    Linear,
    Music,
    Voice
}
export declare enum State {
    None,
    Ready,
    Playing,
    Paused,
    Stopped,
    Buffering,
    Connecting
}
interface TrackMetadataBase {
    title?: string;
    album?: string;
    artist?: string;
    duration?: number;
    artwork?: string | ResourceObject;
}
export interface TrackMetadata extends TrackMetadataBase {
    description?: string;
    genre?: string;
    date?: string;
    rating?: number | boolean;
}
export interface NowPlayingMetadata extends TrackMetadataBase {
    elapsedTime?: number;
}
export interface Track extends TrackMetadata {
    id: string;
    url: string | ResourceObject;
    type?: TrackType;
    userAgent?: string;
    contentType?: string;
    pitchAlgorithm?: PitchAlgorithm;
    [key: string]: any;
}
export {};
