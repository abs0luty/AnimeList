import { useEffect, useState, useRef } from "react"
import ReactPlayer from "react-player"
import { Select } from "antd"

import styles from './styled.module.css'

export const Player = ({ anime, width, height }) => {
	if (!localStorage.getItem(anime.names.ru)) {
		localStorage.setItem(anime.names.ru, "series:0:timing:0")
	}

	const [selectedSeries, setSelectedSeries] = useState(
		JSON.parse(JSON.stringify(localStorage.getItem(anime.names.ru))).split(":")[1]
	)
	const [timingFromLocalStorage, setTimingFromLocalStorage] = useState(
		JSON.parse(JSON.stringify(localStorage.getItem(anime.names.ru))).split(":")[3]
	)
	const [playlistSeriesArray, setPlayListSeriesArray] = useState([])
	const [resolution, setResolution] = useState("hd")

	const playerRef = useRef(null)

	useEffect(() => {
		const arr = []

		Object.entries(anime.player.playlist).forEach(elem => {
			arr.push(elem[1])
		})

		setPlayListSeriesArray(arr)
	}, [anime.player.playlist, anime.names.ru])

	const onChangeSelect = (value) => {
		setSelectedSeries(+value)
		setTimingFromLocalStorage(0)
		localStorage.setItem(anime.names.ru, `series:${value}:timing:0`)
	}
	const onChangeResolution = (value) => {
		setResolution(value)
	}

	const onProgressPlayer = (value) => {
		if (!(value.playedSeconds !== 0)) return
		setTimingFromLocalStorage(value.playedSeconds)
		localStorage.setItem(anime.names.ru, `series:${selectedSeries}:timing:${value.playedSeconds}`)
	}

	const onStartPlayer = () => {
		playerRef.current.seekTo(+timingFromLocalStorage)
	}

	const formattedPlaylistSeriesArray = playlistSeriesArray.map(series => ({
		fhd: `https://${anime.player.host}${series.hls?.fhd}`,
		hd: `https://${anime.player.host}${series.hls?.hd}`,
		sd: `https://${anime.player.host}${series.hls?.sd}`
	}))

	return (
		<div className={styles.playerWrapper}>
			<div className={styles.playerSelects}>
				<Select defaultValue="hd" onChange={onChangeResolution}>
					<Select.Option value="fhd">1920p</Select.Option>
					<Select.Option value="hd">720p</Select.Option>
					<Select.Option value="sd">480p</Select.Option>
				</Select>
				<Select defaultValue={`${+selectedSeries + 1} серия`} onChange={onChangeSelect}>
					{formattedPlaylistSeriesArray.map((elem, idx) => (
						<Select.Option value={idx} key={idx}>{idx + 1} серия</Select.Option>
					))}
				</Select>
			</div>
			<ReactPlayer
				ref={playerRef}
				url={formattedPlaylistSeriesArray && formattedPlaylistSeriesArray[selectedSeries] && formattedPlaylistSeriesArray[selectedSeries][resolution]}
				controls={true}
				width={width}
				height={height}
				onProgress={onProgressPlayer}
				onStart={onStartPlayer}
			/>
		</div>
	)
}