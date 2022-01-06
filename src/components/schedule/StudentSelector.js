import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import {
	dbGetPersonsByAssType,
	dbHistoryAssignment,
	dbHistoryAssistant,
} from '../../indexedDb/dbPersons';
import { appLangState } from '../../appStates/appSettings';

const sharedStyles = {
	tblContainer: {
		maxHeight: '170px',
		marginBottom: '5px',
	},
	tblData: {
		padding: '6px 3px 6px 3px',
	},
	tableHeader: {
		marginTop: '20px',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	tableLoader: {
		display: 'flex',
		margin: '10px auto',
	},
};

const StudentSelector = (props) => {
	const assInfo = props.assInfo;
	const [assID, setAssID] = useState('');
	const [assType, setAssType] = useState('');
	const [assTypeName, setAssTypeName] = useState('');
	const [currentStudent, setCurrentStudent] = useState('');
	const [selectedStudent, setSelectedStudent] = useState('');
	const [selectedStuID, setSelectedStuID] = useState('');
	const [stuForAssistant, setStuForAssistant] = useState('');
	const [assTypeNameForAssistant, setAssTypeNameForAssistant] = useState('');
	const [pickStudents, setPickStudents] = useState([]);
	const [stuHistory, setStuHistory] = useState([]);
	const [assistantHistory, setAssistantHistory] = useState([]);
	const [assHistory, setAssHistory] = useState([]);
	const [isLoadingStudent, setIsLoadingStudent] = useState(false);
	const [isLoadingStuHistory, setIsLoadingStuHistory] = useState(true);
	const [isLoadingAssistantHistory, setIsLoadingAssistantHistory] =
		useState(true);
	const [isLoadingAssHistory, setIsLoadingAssHistory] = useState(true);

	const appLang = useRecoilValue(appLangState);

	const handleSelectStudent = (selectedStudent) => {
		setSelectedStudent(selectedStudent.innerText);
		setSelectedStuID(parseInt(selectedStudent.dataset.personId, 10));
	};

	const handleAssignStudent = () => {
		var obj = {};
		obj.assID = assID;
		obj.assType = assType;
		obj.studentId = selectedStuID;
		obj.studentName = selectedStudent;
		props.setSelectedStudent(obj);
		props.setIsAssign(false);
	};

	const handleDelete = () => {
		props.deleteStudent(assID);
		props.setIsAssign(false);
	};

	useEffect(() => {
		if (assInfo.isAssign) {
			setAssID(assInfo.assID);
			setAssType(assInfo.assType);
			setCurrentStudent(assInfo.currentStudent);
			setAssTypeName(assInfo.assTypeName);
			if (assInfo.stuForAssistant !== undefined) {
				setStuForAssistant(assInfo.stuForAssistant);
			}
			if (assInfo.assTypeNameForAssistant !== undefined) {
				setAssTypeNameForAssistant(assInfo.assTypeNameForAssistant);
			}
			setIsLoadingStudent(true);
		}
	}, [assInfo]);

	useEffect(() => {
		let isSubscribed = true;
		const loadStudents = async () => {
			var students = [];
			if (
				assID === 3 ||
				assID === 5 ||
				assID === 7 ||
				assID === 9 ||
				assID === 11 ||
				assID === 13 ||
				assID === 15 ||
				assID === 17
			) {
				students = await dbGetPersonsByAssType('isAssistant');
			} else {
				if (assType === 0) {
					students = await dbGetPersonsByAssType('isBRead');
				}
				if (assType === 1) {
					students = await dbGetPersonsByAssType('isInitialCall');
				}
				if (assType === 2) {
					students = await dbGetPersonsByAssType('isReturnVisit');
				}
				if (assType === 3) {
					students = await dbGetPersonsByAssType('isBibleStudy');
				}
				if (assType === 4) {
					students = await dbGetPersonsByAssType('isTalk');
				}
			}
			setPickStudents(students);
			setIsLoadingStudent(false);

			const history = await dbHistoryAssignment(appLang);
			var filteredHistory = [];
			if (
				assID === 3 ||
				assID === 5 ||
				assID === 7 ||
				assID === 9 ||
				assID === 11 ||
				assID === 13 ||
				assID === 15 ||
				assID === 17
			) {
				filteredHistory = history.filter((item) => item.assignmentID === 8);
			} else {
				filteredHistory = history.filter(
					(item) => item.assignmentID === assType
				);
			}
			setAssHistory(filteredHistory);
			setIsLoadingAssHistory(false);
		};

		if (isSubscribed) {
			if (isLoadingStudent) {
				loadStudents();
			}
		}
		return () => {
			isSubscribed = false;
		};
	}, [isLoadingStudent, assID, assType, appLang]);

	useEffect(() => {
		let isSubscribed = true;
		const loadStudentHistory = async () => {
			const dbHistory = await dbHistoryAssignment();
			let dbStuHistory = dbHistory.filter(
				(history) => history.studentID === selectedStuID
			);
			setStuHistory(dbStuHistory);
			setIsLoadingStuHistory(false);
		};

		if (isSubscribed) {
			if (selectedStuID !== '') {
				setIsLoadingStuHistory(true);
				loadStudentHistory();
			}
		}
		return () => {
			isSubscribed = false;
		};
	}, [selectedStuID]);

	useEffect(() => {
		let isSubscribed = true;
		const loadAssistantHistory = async () => {
			const assistants = await dbHistoryAssistant(stuForAssistant);
			setAssistantHistory(assistants);
			setIsLoadingAssistantHistory(false);
		};

		if (isSubscribed) {
			if (stuForAssistant !== '') {
				setIsLoadingAssistantHistory(true);
				loadAssistantHistory();
			}
		}
		return () => {
			isSubscribed = false;
		};
	}, [stuForAssistant]);

	return (
		<>
			<Typography
				variant='body1'
				sx={{
					fontWeight: 'bold',
					color: 'orangered',
				}}
			>
				{assTypeName}
			</Typography>
			<Typography variant='body2'>{currentStudent}</Typography>
			{(assID === 3 ||
				assID === 5 ||
				assID === 7 ||
				assID === 9 ||
				assID === 11 ||
				assID === 13 ||
				assID === 15 ||
				assID === 17) && (
				<>
					<Typography
						variant='body2'
						sx={{
							marginTop: '5px',
							fontWeight: 'bold',
						}}
					>
						{assTypeNameForAssistant}
					</Typography>
					<Typography variant='body2'>Mitarika: {stuForAssistant}</Typography>
				</>
			)}
			{currentStudent !== '' && (
				<Button
					variant='contained'
					color='error'
					startIcon={<DeleteIcon />}
					onClick={() => handleDelete()}
				>
					Hamafa
				</Button>
			)}
			<Typography variant='body2' sx={sharedStyles.tableHeader}>
				Afaka manao ny anjara
			</Typography>
			{isLoadingStudent && (
				<CircularProgress
					color='secondary'
					size={30}
					disableShrink={true}
					sx={sharedStyles.tableLoader}
				/>
			)}
			{!isLoadingStudent && (
				<TableContainer sx={sharedStyles.tblContainer}>
					<Table stickyHeader size='small'>
						<TableHead>
							<TableRow>
								<TableCell style={{ width: '200px' }} sx={sharedStyles.tblData}>
									Mpianatra
								</TableCell>
								<TableCell
									align='center'
									style={{ width: '150px' }}
									sx={sharedStyles.tblData}
								>
									Anjara Farany
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{pickStudents.map((student) => (
								<TableRow key={student.id} hover role='checkbox' tabIndex={-1}>
									<TableCell
										data-person-id={student.id}
										onClick={(e) => handleSelectStudent(e.target)}
										sx={{
											'& .MuiTableCell-sizeSmall': sharedStyles.tblData,
										}}
									>
										{student.person_displayName}
									</TableCell>
									<TableCell
										align='center'
										sx={{
											'& .MuiTableCell-sizeSmall': sharedStyles.tblData,
										}}
									>
										{student.lastAssignmentFormat}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
			{selectedStudent !== '' && (
				<>
					<Typography variant='body2' sx={sharedStyles.tableHeader}>
						{selectedStudent} (Anjara efa nataony)
					</Typography>
					{isLoadingStuHistory && (
						<CircularProgress
							color='secondary'
							size={30}
							disableShrink={true}
							sx={sharedStyles.tableLoader}
						/>
					)}
					{!isLoadingStuHistory && (
						<>
							<TableContainer sx={sharedStyles.tblContainer}>
								<Table stickyHeader size='small'>
									<TableHead>
										<TableRow>
											<TableCell
												style={{ width: '60px' }}
												align='center'
												sx={{
													'& .MuiTableCell-sizeSmall': sharedStyles.tblData,
												}}
											>
												Daty
											</TableCell>
											<TableCell
												style={{ width: '250px' }}
												sx={{
													'& .MuiTableCell-sizeSmall': sharedStyles.tblData,
												}}
											>
												Anjara
											</TableCell>
											<TableCell
												style={{ width: '20px' }}
												align='center'
												sx={{
													'& .MuiTableCell-sizeSmall': sharedStyles.tblData,
												}}
											>
												Kilasy
											</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{stuHistory.map((history) => (
											<TableRow
												key={history.ID}
												hover
												role='checkbox'
												tabIndex={-1}
											>
												<TableCell
													align='center'
													sx={{
														'& .MuiTableCell-sizeSmall': sharedStyles.tblData,
													}}
												>
													{history.weekOfFormatted}
												</TableCell>
												<TableCell
													sx={{
														'& .MuiTableCell-sizeSmall': sharedStyles.tblData,
													}}
												>
													{history.assignmentName}
												</TableCell>
												<TableCell
													align='center'
													sx={{
														'& .MuiTableCell-sizeSmall': sharedStyles.tblData,
													}}
												>
													{history.class}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
							{currentStudent !== selectedStudent && (
								<Button
									variant='contained'
									color='primary'
									startIcon={<AccountCircleIcon />}
									onClick={() => handleAssignStudent()}
								>
									Hanendry
								</Button>
							)}
						</>
					)}
				</>
			)}
			{(assID === 3 ||
				assID === 5 ||
				assID === 7 ||
				assID === 9 ||
				assID === 11 ||
				assID === 13 ||
				assID === 15 ||
				assID === 17) && (
				<>
					{stuForAssistant !== '' && (
						<>
							<Typography variant='body2' sx={sharedStyles.tableHeader}>
								{stuForAssistant} (Mpanampy efa niaraka taminy)
							</Typography>
							{isLoadingAssistantHistory && (
								<CircularProgress
									color='secondary'
									size={30}
									disableShrink={true}
									sx={sharedStyles.tableLoader}
								/>
							)}
							{!isLoadingAssistantHistory && (
								<TableContainer sx={sharedStyles.tblContainer}>
									<Table stickyHeader size='small'>
										<TableHead>
											<TableRow>
												<TableCell style={{ width: '60px' }} align='center'>
													Daty
												</TableCell>
												<TableCell
													style={{ width: '250px' }}
													sx={{
														'& .MuiTableCell-sizeSmall': sharedStyles.tblData,
													}}
												>
													Mpianatra
												</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{assistantHistory.map((history) => (
												<TableRow
													key={history.ID}
													hover
													role='checkbox'
													tabIndex={-1}
												>
													<TableCell
														align='center'
														sx={{
															'& .MuiTableCell-sizeSmall': sharedStyles.tblData,
														}}
													>
														{history.weekOfFormatted}
													</TableCell>
													<TableCell
														sx={{
															'& .MuiTableCell-sizeSmall': sharedStyles.tblData,
														}}
													>
														{history.assistantName}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</TableContainer>
							)}
						</>
					)}
				</>
			)}
			<Typography variant='body2' sx={sharedStyles.tableHeader}>
				Mpianatra efa nanao io anjara io
			</Typography>
			{isLoadingAssHistory && (
				<CircularProgress
					color='secondary'
					size={30}
					disableShrink={true}
					sx={sharedStyles.tableLoader}
				/>
			)}
			{!isLoadingAssHistory && (
				<TableContainer sx={sharedStyles.tblContainer}>
					<Table stickyHeader size='small'>
						<TableHead>
							<TableRow>
								<TableCell style={{ width: '60px' }} align='center'>
									Daty
								</TableCell>
								<TableCell
									style={{ width: '250px' }}
									sx={{ '& .MuiTableCell-sizeSmall': sharedStyles.tblData }}
								>
									Mpianatra
								</TableCell>
								<TableCell
									style={{ width: '20px' }}
									align='center'
									sx={{ '& .MuiTableCell-sizeSmall': sharedStyles.tblData }}
								>
									Kilasy
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{assHistory.map((history) => (
								<TableRow key={history.ID} hover role='checkbox' tabIndex={-1}>
									<TableCell
										align='center'
										sx={{ '& .MuiTableCell-sizeSmall': sharedStyles.tblData }}
									>
										{history.weekOfFormatted}
									</TableCell>
									<TableCell
										sx={{ '& .MuiTableCell-sizeSmall': sharedStyles.tblData }}
									>
										{history.studentName}
									</TableCell>
									<TableCell
										align='center'
										sx={{ '& .MuiTableCell-sizeSmall': sharedStyles.tblData }}
									>
										{history.class}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			)}
		</>
	);
};

export default StudentSelector;
