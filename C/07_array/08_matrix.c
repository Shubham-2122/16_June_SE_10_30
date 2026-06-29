/*
	arr[r][c]
*/
#include<stdio.h>
#include<conio.h>

void main()
{
	int a[2][2],b[2][2];
	int i,j;
	int sum[2][2];
	
	
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			printf("Enter your Element A  %i and %d : ",i,j);
			scanf("%d",&a[i][j]);
		}
	}
	
	printf("-----2D array ----\n");
	
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			printf("\na[%d][%d] : %d",i,j,a[i][j]);
		}
	}
	
	printf("\nsecond Array ..\n");
	
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			printf("Enter your Element B %i and %d : ",i,j);
			scanf("%d",&b[i][j]);
		}
	}
	
		printf("-----2D array ----\n");
	
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			printf("\nb[%d][%d] : %d",i,j,b[i][j]);
		}
	}
	 
	printf("\nSum Array ...\n");
	
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			sum[i][j] = a[i][j] + b[i][j];
		}
	}
	
	for(i=0;i<2;i++){
		for(j=0;j<2;j++){
			printf("\nsum[%d][%d] : %d",i,j,sum[i][j]);
		}
	}
	getch();
}
